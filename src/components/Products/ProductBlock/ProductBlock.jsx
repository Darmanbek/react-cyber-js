import React from 'react';
import { Space, Typography } from 'antd';
import "./productBlock.scss";

const { Text, Link, Title  } = Typography;

const ProductBlock = ({ product }) => {
   
    const productTitle = product.productTitle
    const productPriceNumber = product.productPriceNumber
    const productPriceType = product.productPriceType
    const productCategory = product.productCategory
    const contactName = product.contactName
    const contactSurname = product.contactSurname
    const contactRegion = product.contactRegion
    const contactAccount = product.contactAccount
    const contactNumber = product.contactNumber
    const productDesc = product.productDesc

    const priceType = (type) => {
        if (type === "sum") {
            return "сум"
        } 
        if (type === "rub") {
            return "руб"
        } 
        return type
    }

    return (
        <div className="product-block">

            <Space direction="horizontal" 
            style={{
                gap: "20px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr"
            }}
            >
                <Space direction="vertical">
                    <Title level={2}>Товар: {productTitle}</Title>
                    <Title level={5}>{productPriceNumber} {priceType(productPriceType)}</Title>
                    <Text>{contactRegion}</Text>
                </Space>
                <Space direction="vertical">
                    <Title level={4}>Категория: {}</Title>
                    <Title level={4}>{productCategory}</Title>
                </Space>
                <Space direction="vertical">
                    <Title level={5}>Продавец: {contactName} {contactSurname}</Title>
                    <Text strong>Телефон: +{contactNumber}</Text>
                    <Text>{"Почта: "}
                        <Link href="/" target="_blank">
                            {contactAccount}
                        </Link>
                    </Text>
                </Space>
                <Space direction="vertical">
                    <Text>О товаре:</Text>
                    <Text italic>{productDesc}</Text>
                </Space>
            </Space>
        </div>
    )
}

export default ProductBlock;