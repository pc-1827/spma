import * as React from 'react'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
      bg-primary text-primary-foreground hover:bg-primary/90
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
      disabled:opacity-50 disabled:pointer-events-none
      h-10 px-4 ${className}`} // Set a fixed height and horizontal padding
    {...props}
  />
));
Button.displayName = 'Button'
