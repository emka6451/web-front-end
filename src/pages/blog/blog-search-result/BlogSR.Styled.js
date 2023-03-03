import { Grid, Container } from "@mantine/core";
import styled from "styled-components";

export const BlogMainSection = styled(Container) `
    padding-top: 50px;
    padding-right: 100px;
    padding-left: 100px;
  
    @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}){
        padding-left: 15px;
        padding-right: 15px;
    }
    
    @media screen and (min-width: ${({ theme }) => theme.breakPoints.temp}) {
        width: 80%;
    }

    .instruction h2 {
        font-size: 50px;
        font-weight: 600;
      margin-bottom: 32px;

        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            font-size: 40px;
        }
        
        @media screen and (min-width: ${({ theme }) => theme.breakPoints.temp}) {
            font-size: 50px;
            font-weight: 600;
        }

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.temp}) {
            font-size: 30px;
            font-weight: 600;
        }
    }

    .instruction p {
        color: grey;
        padding-bottom: 10px;
        font-size: 13px;
    }
    .img-section {
        object-fit: cover;
        width: 98%;
        height: auto;
        margin-left: 8px;
    }

    .Mui-selected {
        border-radius: 5px;
        background-color: #3800B0 !important;
        color: white;
        font-weight: bold;
    }
`

export const ButtonSection = styled(Grid) `
    padding-top:30px;
    display: flex;
    padding-bottom: 30px;
    
    .btn-section {
        border: 2px solid rgb(229 228 228);
        border-radius: 13px;
        padding-right: 25px;
    }

    .all-btn {
        border: 2px solid #3800B0;
        color: #3800B0;
        height: 50px;
        border-radius: 10px;
        background: rgb(222 229 255);
        text-transform: capitalize;
    }

    .other-btn-th {
        color: black;
        text-transform: capitalize;
    }

    .other-btn {
        background: white;
        border: none;
        color: black;
        height: 50px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-left: 25px;
        text-transform: capitalize;
    }

    .inp-sect {
        width: 232%;
        padding: 8px;
        position: absolute;
    }

`

export const BlogCard = styled(Container) `
    padding: 0px;
    padding-top: 50px;
    margin: 0;

    .date-category {
        color: grey;
        font-size: 13px;
        font-weight: 300;
    }
    
    .title-card {
        color: #0B0023;
        font-weight: 500;
        font-size: 30px;
    }

    .text-card {
        font-size: 16px;
        padding-top: 10px;
        padding-bottom: 15px;
    }

    .read-article {
        color: #3800B0 !important;
        font-size: 14px;
        padding: 0;
        margin: 0;
        text-decoration: none;
        font-weight: 600;
    }
`

export const PaginationSection = styled(Container) `
    display: flex;
    justify-content: center;
    padding-bottom: 70px;
    padding-top: 50px;
`


export const BlogCardNoResult = styled(Container) `
    padding: 0px;
    padding-top: 50px;
    margin: 0;

    .date-category {
        color: grey;
        font-size: 13px;
        font-weight: 300;
    }
    
    .title-card {
        color: #0B0023;
        font-weight: 500;
        font-size: 30px;
    }

    .text-card {
        font-size: 16px;
        padding-top: 10px;
        padding-bottom: 15px;
    }

    .read-article {
        color: #3800B0 !important;
        font-size: 14px;
        padding: 0;
        margin: 0;
        text-decoration: none;
        font-weight: 600;
    }

    .cart-item{

    }
`


export const BlogMainSectionError = styled(Container) `
    padding-top: 50px;
    padding-right: 100px;
    padding-left: 100px;

    @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
        padding-right: 20px;
        padding-left: 20px;
        padding-top: 0;
    }

    .input-col-root {
        padding: 0px;
        width: 100%;
        display: flex;
        align-items: center;

        .inp-sect{
            width: 100%;
            height: 100%;
        }
    }
    
    @media screen and (min-width: ${({ theme }) => theme.breakPoints.temp}) {
        width: 80%;
    }

    .mantine-nsdj {
        margin: 0;
    }

    .mantine-15pjuqq{
        width: 100%;
        max-width: 100%;
        margin-top: 20px;
    }

    .instruction h2 {
        font-size: 56px;
        font-weight: bold;
        padding-bottom: 20px;
        @media screen and (min-width: ${({ theme }) => theme.breakPoints.temp}) {
            font-size: 50px;
            font-weight: 600;
        }

        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}){
            font-size: 40px;
        }

        @media screen and (max-width: ${({ theme }) => theme.breakPoints.temp}) {
            font-size: 30px;
            font-weight: 600;
        }
    }

    .instruction p {
        color: grey;
        padding-bottom: 10px;
        font-size: 13px;
    }

    .img-section {
        object-fit: cover;
        width: 98%;
        height: auto;
        margin-left: 8px;
    }

    .Mui-selected {
        border-radius: 5px;
        background-color: #3800B0 !important;
        color: white;
        font-weight: bold;
    }

    .txt-section {
        color: #0B0023;
        font-size: 40px;
        font-weight: 600;
        padding-bottom: 30px;
    }
`
export const NotFoundSection = styled(Container) `
    background: #F7F8FA;
    padding-top: 20px;
  border-radius: 32px;

    .glasses-img { 
        display: flex;
        justify-content: center;
        padding-bottom: 60px;
    }

    .notfound-section h1 {
        padding-top: 64px;
        color: #6033C0;
        text-align: center;
        font-size: 40px;
        font-weight: 600;
      
        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}) {
          padding-top: 24px;
          font-size: 32px;
        }
    }

    .notfound-section p {
        padding-top: 24px;
        padding-bottom: 10px;
        text-align: center;
        color: #6033C0;
        font-size: 18px;
        font-weight: 400;
      
        @media screen and (max-width: ${({ theme })=> theme.breakPoints.sm}) {
          padding-top: 16px;
          font-size: 16px;
        }
    }
`