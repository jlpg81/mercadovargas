import React from "react";
import { Ionicons, Entypo, Feather, AntDesign } from "@expo/vector-icons";

const iconHelper = (type, name, size, color) => {
  switch (type) {
    case "Ionicons":
      return <Ionicons name={name} size={size} color={color} />;
  }
  switch (type) {
    case "Entypo":
      return <Entypo name={name} size={size} color={color} />;
  }
  switch (type) {
    case "Feather":
      return <Feather name={name} size={size} color={color} />;
  }
  switch (type) {
    case "AntDesign":
      return <AntDesign name={name} size={size} color={color} />;
  }
};

export default iconHelper;
