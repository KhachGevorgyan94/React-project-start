import React from "react";

import Sectionlist from "../section-list";
import coverImage from "../assets/images/pizza1.jpg";
import coverImage1 from "../assets/images/pizza2.jpg";
import coverImage2 from "../assets/images/pizza3.jpg";
import coverImage3 from "../assets/images/pizza4.jpg";
import coverImage4 from "../assets/images/pizza5.jpg";
import coverImage5 from "../assets/images/pizza6.jpg";
import coverImage6 from "../assets/images/pizza7.jpg";
import coverImage7 from "../assets/images/pizza8.jpg";


class SectionMain extends React.Component {

  state = {
    list: [
      {
        image: coverImage,
        subject: 'Fusce dictum finibus',
        title: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$45 / $55',
        type: 'pizza'
      },
      {
        image: coverImage1,
        subject: 'Aliquam sagittis',
        title: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$65 / $70',
        type: 'salad'
      },
      {
        image: coverImage2,
        subject: 'Sed varius turpis',
        title: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$30.50',
        type: 'noodle'
      },
      {
        image: coverImage3,
        subject: 'Aliquam sagittis',
        title: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$25.50',
        type: 'noodle'
      },
      {
        image: coverImage4,
        subject: 'Maecenas eget justo',
        title: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$80.25',
       
        type: 'noodle'
      },
      {
        image: coverImage5,
        subject: 'Quisque et felis eros',
        title: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$20 / $40 / $60',
        type: 'pizza'
      },
      {
        image: coverImage6,
        subject: 'Sed ultricies dui',
        title: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$94',
        type: 'pizza'
      },
      {
        image: coverImage7,
        subject: 'Donec porta consequat',
        title: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$15',
        type: 'salad'
      }
    ],
    selectedProduct: null,
    filteredList: []
  }

  componentDidMount() {
    // this.setState({selectedProduct: 'salad'}, () => {
    //   this.setState({filteredList: this.state.list.filter(x => x.type === this.state.selectedProduct)})
    // })
    this.setState({filteredList:this.state.list})
  }


  selectProduct = (value) => {
    this.setState({
      selectedProduct: value,
      filteredList: this.state.list.filter(x => x.type === value)
    })
  }

  // componentWillUnmount() {
  // }
  //
  // UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
  // }


  render() {
    const {filteredList, selectedProduct} = this.state
    return <div className='section-list'>
      <div className="list-button">
        <button className={`${selectedProduct === 'pizza' ? 'P-active-product' : ''}`}
                onClick={() => this.selectProduct('pizza')}>Pizza
        </button>
        <button className={`${selectedProduct === 'salad' ? 'P-active-product' : ''}`}
                onClick={() => this.selectProduct('salad')}>Salad
        </button>
        <button className={`${selectedProduct === 'noodle' ? 'P-active-product' : ''}`}
                onClick={() => this.selectProduct('noodle')}>Noodle
        </button>
      </div>
      <Sectionlist productList={filteredList}/>
    </div>
  }
}


export default SectionMain