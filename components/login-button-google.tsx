'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconGoogle, IconSpinner } from '@/components/ui/icons'

interface LoginButtonProps extends ButtonProps {
  showGithubIcon?: boolean
  text?: string
}

export function GoogleLoginButton({
  text = 'Login with Google',
  showGithubIcon = true,
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <Button
      id="g_id_onload"
      variant="outline"
      data-type='icon'
      data-size='medium'
      data-width='150px'
      data-auto_prompt='true'
      data-client_id="933474687639-agmkjjncj5nmirrk5qoqgbflpik69941.apps.googleusercontent.com"
      data-login_uri="http://localhost:3000/api/auth/signin"
      onClick={() => {
        setIsLoading(true)
        // next-auth signIn() function doesn't work yet at Edge Runtime due to usage of BroadcastChannel
        signIn('google', { callbackUrl: `/` })
      }}
      disabled={isLoading}
      className={cn(className)}
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 animate-spin" />
      ) : showGithubIcon ? (
        <IconGoogle className="w-4 h-6 mr-4" />
      ) : null}
      {text}
    </Button>
  )
}
