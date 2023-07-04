import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"
import { clearStore, getPostsApi } from '../store/actions'
import { removePost } from '../store/slices'

const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators({ getPostsApi, removePost, clearStore }, dispatch)
}

export default useActions;



