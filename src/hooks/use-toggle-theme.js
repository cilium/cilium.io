const useToggleTheme = () => {
  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    const newTheme = !isCurrentlyDark;

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return toggleTheme;
};

export default useToggleTheme;
