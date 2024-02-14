import { ReactElement } from "react";

  
export type Interaction = {
    name?: string;
    icon?: string;
    ask?: string;
    response: string | ReactElement[];
}

export type chatMessage = {
    sender: string;
    message: string | ReactElement | ReactElement[];
}