import React from 'react';
import CollectionItem from '../../Components/collection-item/collection-item.component'
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop-selectors';
import './collection.scss';

const CollectionPage = ({collection}) => {
    const {title, items} = collection
    return(
    <div className='category'>
       <h2 className='title'>{title}</h2>
       <div className='itens'>
           {
            items.map(item => <CollectionItem key={item.id} item={item}/>)
           }
       </div>
    </div>
) }

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)