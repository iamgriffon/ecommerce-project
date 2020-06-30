import React from 'react';

import MenuItem from '../menu-item/menu.item.component';
import { DirectoryMenu } from './directory-styles';

import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory-selectors'
import {connect} from 'react-redux';

const Directory = ({sections}) => (
            <DirectoryMenu>
                {sections.map(({id, ...otherSectionProps }) => 
                <MenuItem 
                key={id}
                {...otherSectionProps} />)}
            </DirectoryMenu>
        )

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);