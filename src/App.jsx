import css from './App.module.css';
import { Profile } from 'components/Profile/Profile';
import user from './path/to/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from './path/to/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from './path/to/friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from './path/to/transactions.json';

export const App = () => {
  return (
    <div className={css.main}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />{' '}
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
