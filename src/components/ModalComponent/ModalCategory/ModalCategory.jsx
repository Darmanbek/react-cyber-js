import React, { useState } from 'react';
import { Modal } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import ChildrenCategory from './ChildrenCategory/ChildrenCategory';
import { setVisibleCategory } from '../../../store/categorySlice/categories';
import "../modal.scss";

const ModalCategory = ({ setSelectCategory, setSelectSearchCategory }) => {
    const dispatch = useDispatch();
    const { categories, visible } = useSelector(state => state.categories);

    const [children, setChildren] = useState(false);
    const [childShow, setChildShow] = useState(false);

    const onCancel = () => {
        dispatch(setVisibleCategory(false));
    }

    const handleChildren = (category) => {        
        if(category.children.length > 0){
            setChildren(category);
            setChildShow(true);
        }else{
            handleCategory(category)
        }
    }

    const handleCategory = (category) => {
        if(category.parent){
            const categoryParent = categories.find(item => item.id === category.parent).name_ru;
            if (setSelectCategory) {
                setSelectCategory(`${categoryParent} / ${category.name_ru}`);
            }
            if (setSelectSearchCategory)
            setSelectSearchCategory(`${categoryParent} / ${category.name_ru}`);
            setChildren([]);
        }else{
            if (setSelectCategory) {
                setSelectCategory(category.name_ru);
            }
            if (setSelectSearchCategory) {
                setSelectSearchCategory(category.name_ru);
            }
        }
        onCancel();
    }

    return (
        <Modal 
        className="modal"
        title="Выберите категорию"
        open={visible}
        onCancel={onCancel}
        >

            <div className={childShow ? "modal-content hide":"modal-content show"}>

                <ul className="modal-items">

                    {categories && categories.map(category => (
                        <li className="modal-item" key={category.id} onClick={() => handleChildren(category)}>
                            <span className="modal-item__image">
                                <img src={category.image} alt={category.image} />
                            </span>
                            <span className="modal-item__title bold">
                                {category.name_ru}
                            </span>
                            {category.children.length > 0 && <RightOutlined className="modal-item__icon" />}
                        </li>
                    ))}

                </ul>

            </div>

            <ChildrenCategory
            children={children} 
            childShow={childShow} 
            setChildShow={setChildShow} 
            handleCategory={handleCategory}
            onCancel={onCancel}
            />
            
        </Modal>
    );
}

export default ModalCategory;