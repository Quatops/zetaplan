import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPost as fetchPost, addNewPost } from 'api/firebase';

export default function usePost() {
  const queryClient = useQueryClient();
  const postsQuery = useQuery(['post'], fetchPost, {
    staleTime: 1000 * 60,
  });

  const addPost = useMutation(({ content }) => addNewPost(content), {
    onSuccess: () => queryClient.invalidateQueries(['posts']),
  });
  return { postsQuery, addPost };
}
