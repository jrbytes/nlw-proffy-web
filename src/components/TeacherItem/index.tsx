import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/26124887?s=460&u=b54df87504721bea09da0a054f6f56dfac9185d8&v=4" alt="Jr Bytes"/>
        <div>
          <strong>Junior Bytes</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada
        <br/><br/>
        Ipsum lkhl lkasdlal pa apsodsdaa dpsjdpad sjasdla  dasdjasdp asdasdp asd asdldf asdp asdlasd asdapsd asdpjsaf.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
