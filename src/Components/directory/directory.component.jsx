import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu.item.component';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'for us',
                  imageUrl: 'https://www.parenttoolkit.com/images/dmImage/SourceImage/standard_1500x1125_groupofteens2.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/adults'
                },
                {
                  title: 'for them',
                  imageUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ptBR/Images/kids-ss20-kidsattack-klp-signup-d_tcm194-409508.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/kids'
                }
            ] 
        }
    }
    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps }) => 
                <MenuItem 
                key={id}
                {...otherSectionProps} />)}
            </div>
        )
    }
}

export default Directory;