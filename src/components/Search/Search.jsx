import React, { useCallback, useState } from "react";
import { Input, Button } from "antd";
import { AimOutlined, SearchOutlined } from "@ant-design/icons"
import ModalLocation from "../ModalComponent/ModalLocation/ModalLocation";
import { useDispatch } from "react-redux";
import { getSearchProducts } from "../../store/productSlice/products";
import "./search.scss";

const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("")
    const [selectLocation, setSelectLocation] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = useCallback(() => {
        setModalVisible(true);
    } , [modalVisible])

    const handleCancel = useCallback(() => {
        setModalVisible(false);
    }, [modalVisible])

    const searchProduct = () => {
        if (search !== "" || selectLocation !== "") {
            const searchData = {
                search: search.toLowerCase(),
                location: selectLocation === "Все регионы" ? "" : selectLocation
            }
            dispatch(getSearchProducts(searchData))
        }
    }   

    return (
        <section className="search">
            <div className="container">
                <div className="search-inner">
                    <div className="search-inner_input">
                        <Input 
                        size="large" 
                        placeholder="Поиск по сайту" 
                        onChange={e => setSearch(e.target.value)}
                        prefix={<SearchOutlined />} />
                    </div>
                    <div className="search-inner_input_city">
                        <Input size="large" placeholder="Выберите регион" prefix={<AimOutlined />} onClick={showModal} value={selectLocation}/>
                        <ModalLocation
                            onCancel={handleCancel}
                            visible={modalVisible}
                            setSelectLocation={setSelectLocation}
                        />
                    </div>
                    <Button onClick={searchProduct}>
                        <span className="search-btn-text">Поиск</span>
                        <span className="search-btn-icon">
                            <SearchOutlined />
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Search;