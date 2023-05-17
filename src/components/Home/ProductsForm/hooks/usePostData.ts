import { ProductType } from '../../../../types/ProductType';

const usePostData = () => {
  const postData = async (
    productsData: ProductType,
    url: string,
    headers?: object,
  ) => {
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(productsData),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
        return err.message;
      });
  };

  return postData;
};

export default usePostData;
