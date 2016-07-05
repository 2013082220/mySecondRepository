package test;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

public class JsonServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        String action = req.getParameter("action");
        if ("jsonSearch".equals(action)) {
            jsonSearch(req, resp);
        }
    }

    /**
     * 异步刷新
     * 
     * @throws IOException
     */
    private void jsonSearch(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {
        
        req.setCharacterEncoding("utf-8");
        resp.setCharacterEncoding("utf-8");
        
        //获取表单数据
        String name = req.getParameter("name");
        String sex = req.getParameter("sex");
        
        List list = new ArrayList();
        User user = new User();
        user.setName("张三1");
        user.setSexName("男");
        list.add(user);
        user = new User();
        user.setName("张三2");
        user.setSexName("女");
        list.add(user);
        user = new User();
        user.setName("张三3");
        user.setSexName("男");
        list.add(user);
        
        // 使用JSONArray测试
        JSONArray array = new JSONArray();
        array = array.fromObject(list); 
        PrintWriter out = resp.getWriter();     
        out.print(array.toString());    
        System.out.println("json array object :"+array.toString());    
        out.close();    

    }
}
