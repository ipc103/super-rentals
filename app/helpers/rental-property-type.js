import Ember from 'ember';

const communityTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
]
export function rentalPropertyType([type]/*, hash*/) {
  if (communityTypes.includes(type)) {
    return 'Community';
  } else {
    return 'Standalone';
  }
}

export default Ember.Helper.helper(rentalPropertyType);
