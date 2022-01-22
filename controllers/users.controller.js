import { response, request } from 'express';

export const getUsers = (req = request, res = response) => {

    const query = req.query;
    res.json({
        msg: 'get API - controller',
        query
    });
}

export const postUser = (req = request, res = response) => {

    const body = req.body;

    res.json({
        body
    });
}

export const deleteUser = (req = request, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
}

export const updateUser = (req = request, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'update API - controller',
        id
    })
}

export const updatePatchUser = (req = request, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}