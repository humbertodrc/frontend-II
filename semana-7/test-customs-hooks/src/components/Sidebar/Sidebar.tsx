import React from 'react';
// import './styles/Sidebar.css';
export interface SidebarInterface {
	visible: boolean;
	close: () => void;
}

const Sidebar : React.FC<SidebarInterface> = ({ visible, close }) => {
	return  <>
	{visible && (
		<div className="sidebar" id="sidebar">
			<div className="menu">
				<span className="close" onClick={close}>
					X
				</span>
				<div className="menu-list">
					<span>menu 1</span>
					<span>menu 2</span>
					<span>menu 3</span>
				</div>
			</div>
		</div>
	)}
</>;
};

export default Sidebar;
