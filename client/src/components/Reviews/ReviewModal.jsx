import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Rating from "react-rating-stars-component";

const ReviewModal = ({ isOpen, setIsOpen, type, ...props }) => {
  const [reviewData, setReviewData] = useState({
    subject: "",
    reviewText: "",
    isRestaurantReview: false,
    isFoodReview: false,
    rating: 0,
  });

  useEffect(() => {
    if (type === "delivery")
      setReviewData((prev) => ({
        ...prev,
        isFoodReview: true,
        isRestaurantReview: false,
      }));
    else if (type === "dining")
      setReviewData((prev) => ({
        ...prev,
        isRestaurantReview: true,
        isFoodReview: false,
      }));
  }, [type]);

  const { id } = useParams();

  const handleChange = (event) => {
    setReviewData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleRating = (rating) => {
    setReviewData((prev) => ({ ...prev, rating }));
  };

  const toggleDining = () => {
    setReviewData((prev) => ({
      ...prev,
      isRestaurantReview: !prev.isRestaurantReview,
      isFoodReview: false,
    }));
  };

  const toggleDelivery = () => {
    setReviewData((prev) => ({
      ...prev,
      isRestaurantReview: false,
      isFoodReview: !prev.isFoodReview,
    }));
  };

  const submit = () => {
    closeModal();
    setReviewData({
      subject: "",
      reviewText: "",
      isRestaurantReview: false,
      isFoodReview: false,
      rating: 0,
    });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl flex items-center justify-between"
                  >
                    Add Review{" "}
                    <IoMdClose
                      onClick={closeModal}
                      className="cursor-pointer"
                    />
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="flex gap-10 text-lg ">
                      <div className="flex gap-2 items-center ">
                        <input
                          type="radio"
                          id="rating"
                          name="rating"
                          checked={reviewData.isRestaurantReview}
                          defaultChecked
                          onChange={toggleDining}
                          className="accent-zomato-300 w-4 h-4 hover:text-zomato-300"
                        />
                        <label htmlFor="rating" className="font-light">
                          Dining
                        </label>
                      </div>
                      <div className="flex gap-2 items-center">
                        <input
                          type="radio"
                          id="delivery"
                          name="review"
                          checked={reviewData.isFoodReview}
                          onChange={toggleDelivery}
                          className="accent-zomato-300 w-4 h-4"
                        />
                        <label htmlFor="delivery" className="font-light">
                          Delivery
                        </label>
                      </div>
                    </div>
                  </div>
                  <Rating
                    count={5}
                    size={24}
                    value={reviewData.rating}
                    onChange={handleRating}
                  />

                  <form className="mt-2 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-lg">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Add context"
                        id="subject"
                        value={reviewData.subject}
                        onChange={handleChange}
                        className="outline outline-2 outline-gray-200 p-4 rounded-lg focus:outline-none focus:shadow-md bg-white"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="reviewText" className="text-lg">
                        Comment
                      </label>
                      <textarea
                        type="text"
                        rows={5}
                        placeholder="Add review"
                        id="reviewText"
                        value={reviewData.reviewText}
                        onChange={handleChange}
                        className="outline outline-2 outline-gray-200 p-4 rounded-lg focus:outline-none focus:shadow-md bg-white"
                      />
                    </div>
                  </form>

                  <div className="mt-4 flex justify-end items-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-zomato-200 px-4 py-2 text-sm font-medium text-white hover:bg-zomato-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={submit}
                    >
                      Add Review
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ReviewModal;
