import React from 'react'
import { Button, DivBackground, DivFilter, DivForms, DivInputs, Title } from './style'
import Input from '../../components/Input'

const Register = () => {
  return (
    <DivBackground>
      <DivFilter>
        <DivForms>
          <Title>Create your account</Title>

          <DivInputs>
            <Input
              placeholder="name"
            />
            <Input
              placeholder="e-mail"
            />
            <Input
              placeholder="password"
            />
          </DivInputs>

          <Button>Create</Button>
        </DivForms>
      </DivFilter>

    </DivBackground>
  )
}

export default Register