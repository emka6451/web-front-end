import styled from "styled-components";

export const ModalStyle = styled.div`
    .modal-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(0,0,0,0.5);
    }

    .modal {
        padding: 30px;
        max-width: 480px;
        margin: 200px auto;
        background: #fff;
        border-radius: 10px;
    }
`