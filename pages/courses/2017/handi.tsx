import useSWR from 'swr';
import { Table } from 'antd';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
    const { data, error } = useSWR('/api/courses/2017/handi', fetcher);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    const columns = [
        { title: 'Rank', dataIndex: 'rank', key: 'rank' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Bib', dataIndex: 'bib', key: 'bib' },
        {
            title: 'Nationality',
            dataIndex: 'nationality',
            key: 'nationality',
            render: () => <img src="https://sportips.fr/live/img/Flags/FRA.jpg" alt="Nationality" style={{width: '20px'}} /> // Render the image
        },
        { title: 'Category Rank', dataIndex: 'categoryRank', key: 'categoryRank' },
        { title: 'Gender Rank', dataIndex: 'genderRank', key: 'genderRank' },
        { title: 'Time', dataIndex: 'time', key: 'time' },
        { title: 'Gap', dataIndex: 'gap', key: 'gap' },
        { title: 'Speed', dataIndex: 'speed', key: 'speed' },
        { title: 'Club', dataIndex: 'club', key: 'club' },
        { title: 'License', dataIndex: 'license', key: 'license' },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} rowKey="name" />
        </div>
    );
}
