import { useState, useEffect } from 'react';
import { Image, Icon, Input } from 'semantic-ui-react';
import Link from 'next/link';
import styles from './Menu.module.scss';
import { map } from 'lodash';
import classNames from 'classnames';
import { Platform } from '@/api';
import { ENV } from '@/utils';

const platformCtrl = new Platform();

export function Menu(props) {
  const { isOpenSearch } = props;
  const [platforms, setPlatforms] = useState(null);
  const [searchActive, setSearchActive] = useState(false);

  const handleSearch = () => setSearchActive(prevState => !prevState);
  
    useEffect(() => {
        (async () => {
            try {
                const response = await platformCtrl.getPlatforms();
                setPlatforms(response.data);
            } catch (error) {
                console.error('Error fetching platforms', error);
            }
        })();
    }, []);

  return (
    <div className={styles.platforms}>
        {map(platforms, (platform) => (
            <Link key={platform.id} href={`/games/${platform.attributes.slug}`} className={styles.platform}>
                <Image src={`${ENV.UPLOADS_URL}${platform.attributes.icon.data.attributes.url}`} alt={platform.attributes.tittle} />
                <span>{platform.attributes.title}</span>
            </Link>
        ))}

        <button className={styles.search} onClick={handleSearch}>
            <Icon name="search" />
        </button>

        <div className={classNames(styles.inputContainer, {[styles.active]: searchActive})}>
            <Input
                id="search-games"
                type="text"
                placeholder="Search games..."
                className={styles.input}
                focus={true}
                name="search"
            />
            <Icon name="close" className={styles.closeInput} onClick={handleSearch}/>
        </div>
    </div>
  )
}
