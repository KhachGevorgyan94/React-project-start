import React from "react";
import './style.css'
import FAQBox from "./components/FAQ-box";


class FAQList extends React.Component {

  render() {
    return <section className='container'>
      <div className='P-faq-list'>
        <FAQBox title={'1. Fusce eu lorem et dui #09C maximus varius?'}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quibusdam!</p>
          <h3>Lorem ipsum dolor sit amet.</h3>
        </FAQBox>
        <FAQBox title={'2. Fusce eu lorem et dui #09C maximus varius?'}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quibusdam!</p>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <span>Lorem ipsum.</span>
        </FAQBox>
        <FAQBox title={'3. Fusce eu lorem et dui #09C maximus varius?'}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quibusdam!</p>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <span>Lorem ipsum.</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quibusdam!</p>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <span>Lorem ipsum.</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quibusdam!</p>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <span>Lorem ipsum.</span>
        </FAQBox>
      </div>

    </section>
  }
}

export default FAQList