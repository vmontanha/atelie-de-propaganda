import React from 'react'
import { useForm } from "react-hook-form";

import './Cadastrar.css'

const Cadastrar = () => {
          const { register, handleSubmit, formState: { errors } } = useForm();
          const onSubmit = (data) => {
                    fetch('https://api.teste-frontend.ateliedepropaganda.com.br/v1/register', {
                              method: 'POST',
                              body: JSON.stringify(data),
                              headers: {
                                        'Content-type': 'application/json; charset=UTF-8'
                              },
                    })
                              .then((response) => response.json())
                              .then((json) => console.log(json));
          }
          return (
                    <div className='container'>
                              <div className='box__cadastrase grid'>
                                        <h1>Cadastra-se</h1>
                                        <p>Preencha os campos abaixo para validar sua participação na campanha e concorrer aos prêmios.</p>
                              </div>

                              <div className='form_group__container grid'>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                                  <div className='form__single'>
                                                            <label htmlFor='name'>Nome</label>
                                                            <input placeholder='Nome' {...register("name", { required: true })} />
                                                  </div>
                                                  <div className='form__group'>
                                                            <label htmlFor='tax_id'>CPF</label>
                                                            <input placeholder='000.000.000-00' type='number'{...register("tax_id", { required: true })} />
                                                            <label htmlFor='email'>E-mail</label>
                                                            <input placeholder='E-mail' type={'email'} {...register("email", { required: true })} />
                                                  </div>
                                                  <div className='form__group'>
                                                            <label htmlFor='password'>Senha</label>
                                                            <input placeholder='Digite sua senha' type={'password'} {...register("password", { required: true })} />
                                                            <label htmlFor='password_confirmation'>Senha</label>
                                                            <input placeholder='Confirme sua senha' type={'password'} {...register("password_confirmation", { required: true })} />
                                                  </div>
                                                  <div className='form__group'>
                                                            <label htmlFor='company'>Empresa</label>
                                                            <input placeholder='Empresa' {...register("company", { required: true })} />
                                                            <label htmlFor='segment'>Classificação</label>
                                                            <select {...register("segment")}>
                                                                      <option disabled>Escolha sua categoria</option>
                                                                      <option value="Gerente">Gerente</option>
                                                                      <option value="Revendedor">Revendedor</option>
                                                                      <option value="Distribuidor">Distribuidor</option>
                                                            </select>
                                                  </div>
                                                  {/* {errors.exampleRequired && <span>This field is required</span>} */}
                                                  <div className='btn__box'>
                                                            <input type="submit" className='btn__submit' />
                                                  </div>

                                        </form>
                              </div>
                    </div>

          )
}

export default Cadastrar