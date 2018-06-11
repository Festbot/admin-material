import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'react-admin';
import { withRouter } from 'react-router-dom';


const Menu = ({ resources, onMenuClick, logout, menuLabel }) => (
    <div>

    <MenuItemLink to="/program_upload" primaryText="Upload Program" onClick={onMenuClick} />
    <MenuItemLink to="/messages" primaryText="Festbot Messages" onClick={onMenuClick} />


        {resources.map(resource => {
        
            return (
                <MenuItemLink to={`/${resource.name}`} primaryText={resource.options.label} onClick={onMenuClick} />
            )
        })}
       
        
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
});

export default withRouter(connect(mapStateToProps)(Menu)); 