import React from 'react'
import logo from '../../assets/logo-campanha-red.png'

import './Footer.css'

const Footer = () => {
          return (
                    <div className='footer'>
                              <div className='footer__block grid__footer'>
                                        <div className='footer__left'>
                                                  <h1>Só quem vende curte as <br /> experiências mais diferentonas!</h1>
                                                  <p>
                                                            *Campanha válida de 01/02 a 31/03/2020 Vendas via Business Center e para o Setor Público não serão válidas A apuração do mês
                                                            de agosto será retroativa imagens meramente ilustrativas Realizamos todos os esforços para garantir a precisão das informações, mas não
                                                            somos responsáveis por qualquer conteúdo editorial, fotográfico ou por erros tipográficos Todas as imagens são apenas para fins
                                                            ilustrativos Para especificações completas de produto, informações de serviços e garantias, visite www umbrindenaeuropa com/saiba
                                                            Não fazemos nenhuma representação ou garantia em relação a produtos ou serviços de terceiros. Outros nomes de empresas, produtos
                                                            e serviços podem ser marcas registradas ou marcas de serviços de terceiros 2020 Todos os direitos reservados

                                                  </p>
                                        </div>
                                        <div className='footer__right'>
                                                  <img src={logo} alt="" />
                                        </div>
                              </div>
                              <div className='copyright'>
                                        <div className='aside__left'>
                                                  <p>Dúvidas? Envie um e-mail para <a href='mailto:atendimento@umbrindenaeuropa.com.br'>atendimento@umbrindenaeuropa.com.br</a></p>
                                        </div>
                                        <div className='aside__right'>
                                                  <p>Imagens meramente ilustrativas. Promoção válida de 01/02 a 31/03/2020.</p>
                                        </div>

                              </div>
                    </div>
          )
}

export default Footer