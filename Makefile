# Default Node options (increase memory limit if needed)
NODE_OPTIONS ?= --max-old-space-size=8192

# Docker settings
DOCKER_IMAGE ?= cilium-website
DOCKER_TAG ?= latest
DOCKER_PORT ?= 80
DOCKER_DEV_PORT ?= 8000

# Default target
.DEFAULT_GOAL := help

## Install dependencies
install: ## Install dependencies
	npm install

## Copy example env file to .env (only if it doesn't exist)
env: ## Setup environment file
	@if [ ! -f .env ]; then cp .env.example .env; fi
	@if ! grep -q "GATSBY_DEFAULT_SITE_URL" .env; then echo "GATSBY_DEFAULT_SITE_URL=http://localhost:8000" >> .env; fi

## Run the development server (lightweight, skips image processing)
start: ## Start dev server (faster, skips heavy image processing)
	GATSBY_SKIP_IMAGE_PROCESSING=true NODE_OPTIONS="$(NODE_OPTIONS)" npm run start

## Run the development server (full, processes images)
start-full: ## Start dev server (full build with image processing)
	NODE_OPTIONS="$(NODE_OPTIONS)" npm run start

## Build the website for production
build: ## Build production site
	NODE_OPTIONS="$(NODE_OPTIONS)" npm run build

## Serve the built website locally
serve: ## Serve production build locally
	NODE_OPTIONS="$(NODE_OPTIONS)" npm run serve

## Clean Gatsby cache
clean: ## Clean cache
	npm run clean

## Run ESLint
lint: ## Run linter
	npm run lint

## Fix ESLint issues
lint-fix: ## Fix lint issues
	npm run lint:fix

## Format code with Prettier
format: ## Format code
	npm run format

## Remove node_modules and reinstall dependencies
reinstall: ## Reinstall dependencies
	rm -rf node_modules package-lock.json
	npm install

## Build Docker image (production)
docker-build: ## Build Docker image
	docker build -t $(DOCKER_IMAGE):$(DOCKER_TAG) .

## Run containerized website (production build, http://localhost)
docker-run: docker-build ## Run Docker container (prod build)
	docker run --rm -it -p $(DOCKER_PORT):80 $(DOCKER_IMAGE):$(DOCKER_TAG)

## Run website in dev mode inside Docker (hot reload on http://localhost:8000)
docker-run-dev: ## Run Docker container (dev mode)
	docker run --rm -it \
		-v $$(pwd):/app \
		-w /app \
		-p $(DOCKER_DEV_PORT):8000 \
		-e NODE_OPTIONS="$(NODE_OPTIONS)" \
		node:18-alpine sh -c "npm install && npm run start"

## Open a shell in the production container (useful for debugging)
docker-shell: docker-build ## Open shell in Docker container
	docker run --rm -it $(DOCKER_IMAGE):$(DOCKER_TAG) /bin/sh

## Show available make commands
help:
	@echo "Available make commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}' 