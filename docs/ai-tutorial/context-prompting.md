# 如何写出让 AI 秒懂的代码与上下文：Context Engineering

> 如果在使用 AI 对话生成代码时，你时常觉得“它生成的全是不符合我们项目规范的垃圾”，那么极大可能是你没有提供足量、干净、能够让它理解的 **上下文（Context）**。

在和 AI 结对编程的过程中，起决定性作用的早就不是你敲下需求 Prompt 的那一瞬间，而是你平时代码编写的习惯。**对于未来的程序员来说，“把代码写得连机器都能清晰读懂”将变成最重要的“提示工程”之一。**

---

## 1. 原来命名就是最强的 Prompt 提示

在人工编程的年代，如果变量名叫 `a1`、`data2`、`result_flag`，有经验的老大顶多会抱怨难读，但靠着调试跑通代码也不是不行。但在 AI 时代，这是极其致命的。

大语言模型没有人类在系统里摸爬滚打几个月的整体认知。它靠的是**大量的静态阅读推理**去产生联想（Attention 机制）。

### 错误范本
```java
// 计算数据
public List<UserDTO> calc(List<Order> o) {
    List<UserDTO> res = new ArrayList<>();
    // 获取列表里的特殊值去拉取用户
    for(Order i : o) {
        if (i.getS() == 1) { 
             res.add(getUser(i.getU()));
        }
    }
    return res;
}
```
此时你选中代码，呼叫 AI 让它帮你补写获取额外促销余额的逻辑。由于 `calc` 和 `getS` 这种混淆的缩写，AI 会盲猜这只是一个通用的集合转换，补出的代码完全驴唇不对马嘴。

### 优秀的 AI 友好型代码
```java
public List<UserDTO> identifyVipUsersFromOrders(List<Order> orders) {
    List<UserDTO> vipUsers = new ArrayList<>();
    // Filter out orders that have a status (S) of 1 (1 = PAID) to find VIP targets
    for(Order order : orders) {
        if (order.getStatus() == OrderStatus.PAID) { 
             vipUsers.add(fetchUserInfo(order.getUserId()));
        }
    }
    return vipUsers;
}
```
当你在这段代码的上方使用 Cursor/Copilot 敲下回车键，AI 从 `vipUsers` 这个名词中敏锐地捕捉到了核心业务——它会自动帮你预测出：是否需要判断他们的累计消费额度（因为这是各种系统 VIP 的公共特征）？

**结论**：长长的业务实体名称、动名词搭配的方法名，是喂给 AI 的极佳的语料特征词！

---

## 2. Javadoc 与块级注释的二次辉煌

很多团队讨厌写注释。但有了现在的 AI 插件辅助以后，**写注释等于在写实现代码**。

与其一行行去推敲 Java 语法，你可以切换一种心智模型：用母语详细写出函数的步骤设计，然后让 AI 来“填空”。

这种被称为 **注释驱动开发 (Comment-Driven Development)**：
1. 先写大段的方法头注释，明确参数含义和边界以及要抛除的异常。
2. 在方法体内，写上 4 到 5 个单行注释作为每个步骤的骨架。
3. 把光标放在步骤下，按下 Tab 键或者回车。

```java
/**
 * 核心：计算当前购物车中商品的总价与参与打折的最终实际支付价格
 * 注意：部分商品的 isDiscountable 为 false 时，不参与满减活动
 * @param cart 购物车列表
 * @param coupon 折扣券
 * @return 最终应付的 BigDecimal
 * @throws CartEmptyException 购物车为空时报警
 */
public BigDecimal calculateFinalPayableAmount(List<CartItem> cart, Coupon coupon) {
    // 1. 如果购物车为空，直接抛异常
    [这里AI会自动根据注释生成代码]
    
    // 2. 梳理分为可打折金额和不可打折的基础商品金额两部分
    [这里AI会自动根据注释生成循环逻辑]
    
    // 3. 对可打折金额应用传入的优惠券策略
    [AI继续生成...]
}
```
你在进行逻辑设计，而 AI 在充当你的高级编译器。

---

## 3. 全局上下文的“投喂”策略 (RAG for Code)

哪怕是在单一文件里写得很漂亮，当你要求 AI “新建一个跟原本用户注册极其类似的商户注册接口” 时。AI 可能会瞎编一个路由框架或者是数据库连接库。

在使用高级对话式 IDE (如 Cursor 的 Cmd/Ctrl+L) 提问时，请不要“裸问”。你可以这样添加上下文：
1. **用 `@Docs` 引入官方框架规则**：如果你在写冷门的架构比如最新的 Vue 3.4 响应式 API。你可以在对话框先输入 `@vue` 链接库的文档作为前置参考，以防止 AI 胡编乱造旧版本语法。
2. **用 `@Files` 引入参考样例表**：把你项目中已经写好的**成功案例（样例代码）**作为强制上下文输入进去（比如：`根据 @UserController.java 文件的统一返回格式封装和异常处理规则，帮我重写目前的 MerchantController.`）。

AI 就像是一个超高智商却没有记忆的学神，你给了它优秀的参考书和习题解答步骤（**好命名注释+全局文件投喂**），它才能完美无缺地代你交上答卷。

下一节，我们将进入最核心的最后一章，通过**大模型开发实战（[API 接入与智能体设计](./llm-apis)）**来揭开所有 AI 爆火应用的神秘底层面纱。
