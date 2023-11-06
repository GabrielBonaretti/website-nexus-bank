import React from 'react'
import { Button, DivBackground, DivFilter, DivForms, DivInputs, Input, Title } from './style'

const Register = () => {
  return (
    <DivBackground>
      <DivFilter>
        <DivForms>
          <Title>Create your account</Title>

          <DivInputs>
            <Input placeholder="Name" type="text" />
            <Input placeholder="CPF" type="text" />
            <Input placeholder="E-mail" type="text" />
            <Input placeholder="Password" type="text" />
            <Input placeholder="Confirm password" type="text" />
          </DivInputs>

          <Button>Create</Button>
        </DivForms>
      </DivFilter>

    </DivBackground>
  )
}

export default Register