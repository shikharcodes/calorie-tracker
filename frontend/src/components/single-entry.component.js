import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css"

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Entry = ({entryData, setChangeIngredient, deleteSingleEntry, setChangeEntry}) => {
    return (
        <Card>
            <Row>
                <Col>Dish: {entryData != undefined && entryData.dish}</Col>
                <Col>Ingredients: {entryData != undefined && entryData.ingredients}</Col>
                <Col>Calories: {entryData != undefined && entryData.calories}</Col>
                <Col>Fat: {entryData != undefined && entryData.fat}</Col>
                <Col><Button onclick={() => deleteSingleEntry(entryData._id)}>Delete Entry</Button></Col>
                <Col><Button onclick={() => changeIngredient()}>Change Ingredients</Button></Col>
                <Col><Button onclick={() => changeEntry()}>Change Entry</Button></Col>
            </Row>
        </Card>
    );

    function changeIngredient() {
        setChangeIngredient(
            {
                "change": true,
                "id": entryData._id
            }
        )
    }

    function changeEntry() {
        setChangeEntry(
            {
                "change": true,
                "id": entryData._id
            }
        )
    }
}

export default Entry;