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
            <Input placeholder="name" />
            <Input placeholder="e-mail" />
            <Input placeholder="cpf" />
            <Input placeholder="password" type="password" />
            <Input placeholder="confirm password" type="password" />
          </DivInputs>

          <Button type="submit" value="Sign in" />
        </DivForms>
      </DivFilter>

    </DivBackground>
  )
}

export default Register