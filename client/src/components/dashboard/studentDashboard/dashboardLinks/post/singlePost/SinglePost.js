import React, { useState } from "react";
import moment from "moment";
import ReplyIcon from "../../../../../../assets/ReplyIcon";
import ChatIcon from "../../../../../../assets/ChatIcon";
import DotsVertivalIcon from "../../../../../../assets/DotsVertivalIcon";
import { useDispatch } from "react-redux";
import { fetchPostComments } from "../../../../../../actions/post";
import { useHistory } from "react-router-dom";

const SinglePost = ({
    post,
    author,
    setShowOverlay,
    setShowPostEditModal,
    setShowPostDeleteModal,
    setSelectedPost,
    setIsHidden,
    setSelectedPostIndex,
    selectedPostIndex,
    executeFocusInput,
    setCommentLoading,
    index,
}) => {
    // getting uid of the logged in user
    let uid = "";
    if (localStorage.getItem("authData")) {
        uid = JSON.parse(localStorage.getItem("authData"))["uid"];
    }

    const dispatch = useDispatch();
    const history = useHistory();

    // state variable to set the toggle visible state of the popup menu
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="bg-white mb-5 py-3 px-4 rounded-md border flex flex-col">
            {toggleMenu && (
                <div
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className="fixed left-72 opacity-0 w-full h-full top-0 right-0 z-10"
                ></div>
            )}
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-between mb-5">
                    <img
                        className="h-12 w-12 rounded-full mr-5"
                        src={
                            author.avatar.url === ""
                                ? `https://avatars.dicebear.com/api/initials/${author.firstname}.svg`
                                : author.avatar.url
                        }
                        alt="authorImage"
                    />
                    <div>
                        <h3>{`${author.firstname} ${author.middlename} ${author.lastname}`}</h3>
                        <div className="flex items-center justify-center">
                            <h6> {moment(post.createdAt).format("LLL")}</h6>
                            <div className="ml-2 mr-2 w-1 h-1 rounded-full bg-black"></div>
                            <h6>
                                {author.designation ? author.designation : "Designation not found"}
                            </h6>
                            <div className="ml-2 mr-2 w-1 h-1 rounded-full bg-black"></div>
                            <h6>
                                {author.department ? author.department : "Department not found"}
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    {selectedPostIndex === index && (
                        <h6 className="text-blue-600 bg-blue-100 py-px px-2 rounded-full mr-1">
                            viewing
                        </h6>
                    )}
                    {uid.toString() === author._id.toString() ? (
                        <button
                            onClick={() => setToggleMenu(!toggleMenu)}
                            className={`flex items-center justify-center hover:bg-gray-200 p-1 rounded-full transition-all relative group ${
                                toggleMenu ? "bg-gray-200" : ""
                            }`}
                        >
                            <DotsVertivalIcon alt={false} myStyle={"h-5 w-5"} />
                            <div
                                className={`${
                                    toggleMenu
                                        ? "scale-100 translate-x-0 translate-y-0"
                                        : "scale-0 translate-x-11 -translate-y-8"
                                } absolute transform transition-all bg-white top-3 z-20 right-9 rounded-md py-2 shadow-m32`}
                            >
                                <h5
                                    onClick={() => {
                                        setShowOverlay(true);
                                        setShowPostEditModal(true);
                                        setSelectedPost(post);
                                    }}
                                    className="hover:bg-gray-200 px-4 flex py-1"
                                >
                                    Edit
                                </h5>
                                <h5
                                    onClick={() => {
                                        setShowOverlay(true);
                                        setShowPostDeleteModal(true);
                                        setSelectedPost(post);
                                    }}
                                    className="hover:bg-gray-200 px-4 py-1 flex"
                                >
                                    Delete
                                </h5>
                            </div>
                        </button>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
            <p className="mb-4 a-tag" dangerouslySetInnerHTML={{ __html: `${post.body}` }}></p>
            <div className="flex items-center justify-end">
                <button
                    onClick={() => {
                        setCommentLoading(true);
                        dispatch(fetchPostComments(history, post._id, setCommentLoading));
                        setSelectedPostIndex(index);
                        setIsHidden(false);
                        setSelectedPost(post);
                    }}
                    className="flex items-center justify-end hover:bg-gray-200 place-self-end p-3 rounded-md transition-all text-sm"
                >
                    <ChatIcon alt={true} myStyle={"h-4 w-4 mr-1"} />
                    comments {post.commentCount}
                </button>
                <button
                    onClick={() => {
                        setCommentLoading(true);
                        setSelectedPostIndex(index);
                        setIsHidden(false);
                        setSelectedPost(post);
                        executeFocusInput();
                        dispatch(fetchPostComments(history, post._id, setCommentLoading));
                    }}
                    className="flex items-center justify-end hover:bg-gray-200 place-self-end p-3 rounded-md transition-all text-sm"
                >
                    <ReplyIcon alt={false} myStyle={"h-4 w-4 mr-1"} />
                    reply
                </button>
            </div>
        </div>
    );
};

export default SinglePost;
