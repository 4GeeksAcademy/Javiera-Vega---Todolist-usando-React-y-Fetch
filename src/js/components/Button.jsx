/*import  React, { useState } from "react";

const urlBase = "https://playground.4geeks.com/todo"


export const Button = () => {


    
    const deleteAllTask = async () => {
        try {
            const response = await fetch(`${urlBase}/users/Javiera`, {
                method: "DELETE",
            })
            if (response.ok) {
                

            } else {
                console.log("error al eliminar")
            }
        } catch (error) {

        }

    }

    return (
        <div>
            {
                listTaskId.map((item) => {
                    return (
                        <div 
                        className="button-cont"
                        key={item.id}>
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => deleteAllTask()}> Delete All Task
                        </button>
                    </div>

                    )
                })
            }
           
        </div>

    )
}*/
