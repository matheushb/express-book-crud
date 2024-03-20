import app from './app';
import { PORT } from './constants/constants';

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
