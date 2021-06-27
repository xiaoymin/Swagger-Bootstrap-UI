/*
 * Copyright (C) 2018 Zhejiang xiaominfo Technology CO.,LTD.
 * All rights reserved.
 * Official Web Site: http://www.xiaominfo.com.
 * Developer Web Site: http://open.xiaominfo.com.
 */

package com.github.xiaoymin.knife4j.aggre.nacos;

import cn.hutool.core.util.StrUtil;
import com.github.xiaoymin.knife4j.aggre.core.ext.PoolingConnectionManager;
import com.github.xiaoymin.knife4j.aggre.core.pojo.BasicAuth;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import org.apache.http.HttpStatus;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

/**
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2021/05/04 15:00
 * @since:knife4j-aggregation-spring-boot-starter 2.0.9
 */
public class NacosOpenApi  extends PoolingConnectionManager {
    /**
     * Nacos鉴权地址，详情参考：https://nacos.io/zh-cn/docs/auth.html
     */
    private static final String NACOS_AUTH_API="/v1/auth/login";

    Logger logger= LoggerFactory.getLogger(NacosOpenApi.class);
    private static final NacosOpenApi INSTANCE=new NacosOpenApi();
    private NacosOpenApi(){}
    public static NacosOpenApi me(){
        return INSTANCE;
    }

    /**
     * 获取Nacos注册中心鉴权token
     * @param serviceUrl Nacos注册中心地址
     * @param basicAuth 鉴权用户信息
     * @return 鉴权Token
     */
    public String getAccessToken(String serviceUrl,BasicAuth basicAuth){
        if (serviceUrl==null){
            throw new IllegalArgumentException("Nacos serviceUrl can't be Null!");
        }
        if (basicAuth==null){
            throw new IllegalArgumentException("basicAuth can't be Null!");
        }
        if (logger.isDebugEnabled()){
            logger.debug("get Nacos OpenApi accessToken,serviceUrl:{},argument:{}",serviceUrl,basicAuth.toString());
        }
        String api=serviceUrl+NACOS_AUTH_API;
        if (logger.isDebugEnabled()){
            logger.debug("Nacos OpenApi auth url:{}",api);
        }
        HttpPost post=new HttpPost(api);
        List<BasicNameValuePair> pairs=new ArrayList<>();
        pairs.add(new BasicNameValuePair("username",basicAuth.getUsername()));
        pairs.add(new BasicNameValuePair("password",basicAuth.getUsername()));
        try {
            post.setEntity(new UrlEncodedFormEntity(pairs,"UTF-8"));
            CloseableHttpResponse response=getClient().execute(post);
            if (response!=null){
                int statusCode=response.getStatusLine().getStatusCode();
                if (logger.isDebugEnabled()){
                    logger.debug("Nacos Response Status:{}",statusCode);
                }
                if (statusCode== HttpStatus.SC_OK){
                    String content= EntityUtils.toString(response.getEntity(),"UTF-8");
                    if (StrUtil.isNotBlank(content)){
                        if (logger.isDebugEnabled()){
                            logger.debug("Response Content:{}",content);
                        }
                        JsonElement jsonElement= JsonParser.parseString(content);
                        if (jsonElement!=null&&jsonElement.isJsonObject()) {
                            JsonElement accessTokenElement=jsonElement.getAsJsonObject().get("accessToken");
                            if (accessTokenElement!=null){
                                return accessTokenElement.getAsString();
                            }
                        }
                    }
                }else{
                    post.abort();
                }
            }
        } catch (Exception e) {
            logger.error(e.getMessage(),e);
        }
        return null;
    }
}