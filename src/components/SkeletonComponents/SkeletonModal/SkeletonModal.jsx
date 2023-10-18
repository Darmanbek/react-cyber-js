import { Skeleton } from "antd";
import "./skeletonModal.scss";

const SkeletonModal = () => {
    const skeletonModals = [];

    for (let i = 0; i <= 13; i++) {
        skeletonModals.push(i);
    }

    return (
        <div className="modal-skeleton">
        {skeletonModals.map((_, index) => (
            <Skeleton.Button key={index} active block={true} size="small" />
        ))}
        </div>
    );
};

export default SkeletonModal;