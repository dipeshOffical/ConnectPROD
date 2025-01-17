import { recentPosts } from "../../static-data";

const Sidebar = () => {
    return (
        <div className="lg:col-span-2">
            <div className="border h-full">
                <div className="border-b text-center py-3 text-sm font-semibold"><h6>Recent</h6></div>
                <div className="mt-8">
                    {recentPosts.map((post, index) => {
                        return (
                            <div className="px-10 py-3" key={index}>
                                <div className="w-full"><img src={post.image} alt="connect-post-img" className="w-full" /></div>
                                <h4 className="text-sm font-semibold mt-2 pb-2">{post.title}</h4>
                                <span className="text-xs">{post.date}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;