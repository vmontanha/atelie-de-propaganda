import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

import './Login.css'

const Login = () => {
          const { register, handleSubmit } = useForm();
          const onSubmitLogin = (data) => { console.log(data) }
          return (
                    <>
                              <Header />
                              <div className='container__login'>
                                        <div className='box__cadastrase grid'>
                                                  <h1>LOGIN</h1>
                                        </div>

                                        <div className='form_group__container grid'>
                                                  <form onSubmit={handleSubmit(onSubmitLogin)}>
                                                            <div className='form__single__login'>
                                                                      <input placeholder='Digite seu CPF' {...register("tax_id", { required: true })} />
                                                            </div>

                                                            <div className='form__single__login'>
                                                                      <input placeholder='Digite sua senha' type={'password'} {...register("password", { required: true })} />
                                                            </div>

                                                            <div className='routers__group'>
                                                                      <Link to="/cadastrar" className='link'>Ainda não é cadastrado?</Link>
                                                                      <p>Esqueceu sua senha?</p>
                                                            </div>

                                                            <div className='btn__box'>
                                                                      <button type="submit" className='btn__submit'>ENVIAR</button>
                                                            </div>

                                                  </form>
                                        </div>
                              </div>
                    </>


          )
}

export default Login