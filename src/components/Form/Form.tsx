import React, {ReactNode} from 'react'

interface Props {
    children: ReactNode,
    action?: string,
    method?: string
}

type FormProps = Props & Record<string, unknown>

const Form = ({action, method, children, ...passProps}: FormProps) => {
    const props = {
        ...passProps
    }
  return (
    <form action={action} method={method} {...props}>{children}</form>
  )
}

export default Form