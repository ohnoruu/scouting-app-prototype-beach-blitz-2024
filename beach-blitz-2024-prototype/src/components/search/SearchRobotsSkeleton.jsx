import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './SearchRobotsSkeleton.css';
import StatGlimpse from '../home/StatGlimpse.jsx';

export default function SearchRobotsSkeleton() {
    return (
        <div className="container">
            <div className="topPiece" />
            <div className="middlePiece">
                <div className="searchbar">
                    <FaSearch className="searchIcon" size={25} color={'black'} />
                </div>
                <div className="viewScoutingData">
                    <StatGlimpse isLoading={true} />
                </div>
            </div>
            <div className="bottomPiece" />
        </div>
    );
}