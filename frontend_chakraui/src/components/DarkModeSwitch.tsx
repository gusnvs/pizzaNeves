import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButtonProps } from '@chakra-ui/react'

export const DarkModeSwitch = (props: IconButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <IconButton
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      variant='ghost'
      onClick={toggleColorMode}
      {...props}
    />
  )
}
