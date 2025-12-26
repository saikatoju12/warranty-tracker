// Test cases for validation
const testCases = [
  // Valid create
  {
    operation: 'create',
    data: {
      userId: 'user123',
      productName: 'iPhone',
      purchaseDate: '2024-01-01',
      expirationDate: '2025-01-01',
      retailer: 'Apple Store',
      warrantyDuration: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    shouldPass: true,
    auth: { uid: 'user123' }
  },
  
  // Invalid: Wrong userId
  {
    operation: 'create',
    data: { /* ... */ userId: 'otherUser' },
    shouldPass: false,
    auth: { uid: 'user123' }
  },
  
  // Invalid: Missing required fields
  {
    operation: 'create',
    data: { userId: 'user123', productName: 'iPhone' }, // Missing other fields
    shouldPass: false,
    auth: { uid: 'user123' }
  }
];