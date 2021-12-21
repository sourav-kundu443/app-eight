import React from "react";

const FormNameField = ({fieldName, place_holder}) => {
    return (
        <div className="col-md-4 col-sm-4">

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder={place_holder} />
                <label for="floatingInput">{fieldName}</label>
            </div>
        </div>
    )
}

export default FormNameField;