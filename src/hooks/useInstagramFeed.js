const useInstagram = () => {
  const [instagramData, setInstagramData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const instagram = new Instagram({
      clientId: 'your-client-id',
      clientSecret: 'your-client-secret',
      accessToken: 'user-access-token',
    });

    const fetchData = async () => {
      try {
        const data = await instagram.get('users/self');
        setInstagramData(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return { instagramData, error };
};

export default useInstagram;
