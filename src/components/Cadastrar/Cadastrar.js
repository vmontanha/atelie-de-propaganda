import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import Modal from "../Modal/Modal";

import './Cadastrar.css'

const Cadastrar = () => {

          const [show, setShow] = useState(false);
          const { register, handleSubmit, formState: { errors } } = useForm();
          const onSubmit = (data) => {
                    fetch('https://api.teste-frontend.ateliedepropaganda.com.br/v1/register', {
                              method: 'POST',
                              body: JSON.stringify(data),
                              headers: {
                                        'Content-type': 'application/json; charset=UTF-8'
                              },
                    })
                              .then((response) => response.json()).then(setShow(true));
          }
          return (
                    <>
                              <Header />
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
                                                                      {errors.name && <span>Campo obrigatório</span>}
                                                            </div>
                                                            <div className='form__group'>
                                                                      <label htmlFor='tax_id'>CPF</label>
                                                                      <input placeholder='000.000.000-00' minLength={11} type='number'{...register("tax_id", { required: true })} />
                                                                      {errors.tax_id && <span>Digite im CPF válido</span>}
                                                                      <label htmlFor='email'>E-mail</label>
                                                                      <input placeholder='E-mail' type={'email'} {...register("email", { required: true })} />
                                                                      {errors.email && <span>Campo obrigatório</span>}
                                                            </div>
                                                            <div className='form__group'>
                                                                      <label htmlFor='password'>Senha</label>
                                                                      <input placeholder='Digite sua senha' type={'password'} {...register("password", { required: true })} />
                                                                      {errors.password && <span>Campo obrigatório</span>}
                                                                      <label htmlFor='password_confirmation'>Senha</label>
                                                                      <input placeholder='Confirme sua senha' type={'password'} {...register("password_confirmation", { required: true })} />
                                                                      {errors.password_confirmation && <span>Campo obrigatório</span>}
                                                            </div>
                                                            <div className='form__group'>
                                                                      <label htmlFor='company'>Empresa</label>
                                                                      <input placeholder='Empresa' {...register("company", { required: true })} />
                                                                      {errors.company && <span>Campo obrigatório</span>}
                                                                      <label htmlFor='segment'>Classificação</label>
                                                                      <select {...register("segment")}>
                                                                                <option disabled>Escolha sua categoria</option>
                                                                                <option value="Gerente">Gerente</option>
                                                                                <option value="Revendedor">Revendedor</option>
                                                                                <option value="Distribuidor">Distribuidor</option>
                                                                      </select>
                                                            </div>
                                                            <div className='btn__box'>
                                                                      <button type="submit" className='btn__submit'>ENVIAR</button>
                                                            </div>

                                                            <div className='btn__box'>
                                                                      <Link to="/" className='link'>Voltar ao login?</Link>
                                                            </div>

                                                  </form>
                                        </div>
                                        < Modal title="" onClose={() => setShow(false)} show={show} >
                                                  <p>Cadastro Realizado com sucesso!</p>
                                        </Modal >
                              </div>

                    </>

          )
}

export default Cadastrar