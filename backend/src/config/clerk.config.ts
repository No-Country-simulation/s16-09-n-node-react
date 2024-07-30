import { createClerkClient } from '@clerk/clerk-sdk-node';

const clerk = createClerkClient({
  secretKey: 'sk_test_QlGnZWzkWjXl3ORfeqmHbhcUKLeX5dekKVuBzJourb',
});

export default clerk;
