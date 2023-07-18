import { useEffect } from "react";
import Button from '../components/Button';
import useThemeStore from "../stores/useThemeStore";
import { applyThemePreference } from "../utils/themeUtils";

const ToggleTheme = () => {

  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);

  console.log(theme);
  
  return (
    <Button
      onClick={toggleTheme}
      type="outline"
      small
      className="bg-white"
      label={'Toggle Theme'}
    />
  )
}

export default ToggleTheme