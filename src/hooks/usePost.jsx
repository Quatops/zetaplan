import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewPost } from 'api/firebase';

export default function usePost() {
  const queryClient = useQueryClient();
  const postsQuery = useQuery(['posts'], fetchProducts, {
    staleTime: 1000 * 60,
  });

  const addPost = useMutation(({ post, url }) => addNewPost(post, url), {
    onSuccess: () => queryClient.invalidateQueries(['posts']),
  });
  return { postsQuery, addPost };
}
