package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Entry struct {
	ID          primitive.ObjectID `bson: "id"`
	Dish        *string            `json: "dish"`
	Fat         *float64           `json: "fat"`
	Ingredients *string            `json: "ingrdients"`
	Calories    *string            `json: "calories"`
}
